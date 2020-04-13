import boto3

import os
os.environ['AWS_CONFIG_FILE'] = os.getcwd() + '/awsconfig'

def handler(context, inputs):
    ec2 = boto3.resource('ec2')
    filters = [{
        'Name': 'instance-state-name',
        'Values': ['running']
    }]
 
    instances = ec2.instances.filter(Filters=filters)
    for instance in instances:
        print('Instance: ' + instance.id)