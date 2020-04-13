function Handler($context, $inputs) {
    # In case using Self Signed certificate errors you can uncomment the next line, but have it mind that it imposes security risks
    # Set-PowerCLIConfiguration -InvalidCertificateAction:Ignore -Confirm:$false

    $server="IP/Hostname" # can be as well retrived from $inputs
    $username="Username" # can be as well retrived from $inputs
    $password=$inputs.password # retrived from $inputs

    Connect-VIServer -Server $server -Protocol https -User $username -Password $password

    $vms = (Get-VM).where{$_.PowerState -eq 'PoweredOn'}

    Write-Host $vms

    return ""
}
