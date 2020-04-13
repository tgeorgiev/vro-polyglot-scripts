Import-Module Assert

function Handler($context, $inputs) {
    $password=$inputs.password

    $password | Assert-NotNull
    $password | Assert-Type String

    return ""
}
