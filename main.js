window.onload = () =>
    {
        document.querySelector('#calculate').onclick = calculateTip;
    }

    function calculateTip() {
        let amount = document.querySelector('#amount').value;
        let persons = document.querySelector('#persons').value;
        let service = document.querySelector('#services').value;
     
        console.log(service);
        

        if (amount === '' && service === 'Select') {
            alert("Please enter valid values");
            return;
        }
     
        //Spliting the amount according to persons number.
        if (persons === '1')
        // If person is  then not need to display each.
            document.querySelector('#split').style.display = 'none';
        else
            document.querySelector('#split').style.display = 'block';
     
        //Tip amount on a person.
        let total = (amount * service) / persons;
        total = total.toFixed(2);

        // Total amount to be pay by per person
        let totalAmount = (amount/persons) + (amount * service) / persons;
        totalAmount = totalAmount.toFixed(2);
     
        document.querySelector('.tip').style.display = 'block';
        document.querySelector('#total').innerHTML = total;
        document.querySelector('#totalAmount').innerHTML =totalAmount;
    } 