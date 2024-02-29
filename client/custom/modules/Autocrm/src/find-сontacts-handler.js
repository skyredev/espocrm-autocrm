define('autocrm:find-сontacts-handler', ['action-handler'], function (Dep) {
    return Dep.extend({

        actionFindContacts: function (data, e) {
            const email = this.view.model.get('emailAddress');

            if (!email) {
                Espo.Ui.error("Email is not defined");
                return;
            }

            Espo.Ajax.getRequest('Contact',  {
                where: [
                    {
                        type: 'equals',
                        field: 'emailAddress',
                        value: email
                    }
                ]})
                .then(response => {
                    if (response.total > 0) {
                        const contactsInfo = response.list.map(function(contact) {
                            return contact.firstName + ' ' + contact.lastName;
                        }).join('\n');
                        console.log("Found contacts:\n", contactsInfo);
                        Espo.Ui.success("Found contacts:\n" + contactsInfo);
                    } else {
                        Espo.Ui.error("No contacts found with this email.");
                    }
                }).catch(function(error) {
                console.error("Error fetching contacts:", error);
                Espo.Ui.error("Error fetching contacts");
            });
        },



        controlActionVisibility: function () {
            if (~['Converted', 'Dead', 'Recycled'].indexOf(this.view.model.get('status'))) {
                this.view.hideActionItem('findContacts');

                return;
            }

            this.view.showActionItem('findContacts');
        },
    });
});