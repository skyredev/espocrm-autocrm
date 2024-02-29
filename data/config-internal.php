<?php
return [
  'database' => [
    'host' => 'localhost',
    'port' => '',
    'charset' => NULL,
    'dbname' => 'espocrm',
    'user' => 'espocrm-owner',
    'password' => 'espocrm123$%',
    'platform' => 'Mysql'
  ],
  'smtpPassword' => '',
  'logger' => [
    'path' => 'data/logs/espo.log',
    'level' => 'WARNING',
    'rotation' => true,
    'maxFileNumber' => 30,
    'printTrace' => false
  ],
  'restrictedMode' => false,
  'webSocketMessager' => 'ZeroMQ',
  'clientSecurityHeadersDisabled' => false,
  'clientCspDisabled' => false,
  'clientCspScriptSourceList' => [
    0 => 'https://maps.googleapis.com'
  ],
  'adminUpgradeDisabled' => false,
  'isInstalled' => true,
  'microtimeInternal' => 1709236220.971118,
  'passwordSalt' => '99a87108e368e5d4',
  'cryptKey' => '8cfe751762e2bd230a01d5f90acf58ed',
  'hashSecretKey' => '17ab0437070e5c302d78aace9ab8495a',
  'actualDatabaseType' => 'mariadb',
  'actualDatabaseVersion' => '10.4.32',
  'instanceId' => '5f7d7154-8881-487b-968f-33ec6ff3254c'
];
