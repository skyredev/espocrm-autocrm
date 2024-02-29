define('autocrm:find-сontacts-handler', ['action-handler'], function (Dep) {
    return Dep.extend({

        actionFindContacts: function (data, e) {
            const email = this.view.model.get('emailAddress');

            if (!email) {
                return Espo.Ui.error("Email is not defined");
            }

            this.findContactsByEmail(email);
        },

        findContactsByEmail: function (email) {
            Espo.Ajax.getRequest('Contact', {
                where: [{ type: 'equals', field: 'emailAddress', value: email }]
            })
                .then(response => this.handleFindContactsResponse(response))
                .catch(error => {
                    Espo.Ui.error("Error fetching contacts", error);
                });
        },

        handleFindContactsResponse: function (response) {
            if (response.total > 0) {
                const contactsInfo = response.list.map(contact =>
                    `${contact.firstName} ${contact.lastName}`
                ).join('\n');

                console.log("Found contacts:\n", contactsInfo);
                Espo.Ui.success("Found contacts:\n" + contactsInfo);
            } else {
                Espo.Ui.error("No contacts found with this email.");
            }
        },

        controlActionVisibility: function () {
            const status = this.view.model.get('status');
            const shouldHide = ['Converted', 'Dead', 'Recycled'].includes(status);

            shouldHide ? this.view.hideActionItem('findContacts') :
                this.view.showActionItem('findContacts');
        },
    });
});