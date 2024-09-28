import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Axscor from "../../../../../../UseHock/axseccor/Axscor";
import { AuthConst } from "../../../../../../Routs/firebase/Authpovadar/Authpovadar";
import Swal from "sweetalert2";


const CheckoutForm = ({data}) => {
  const { user } = useContext(AuthConst)
  const stripe = useStripe();
  const elements = useElements();
  const [Donation, setDonation] = useState('')
  const [clientSecret, setclientSecret] = useState(true)
  const stringClientSecret = clientSecret.toString();

  console.log(clientSecret);

  const ax = Axscor()
console.log('ami',data)
const { _id}=data



  useEffect(() =>
     {
      if(Donation > 0 ){
        ax.post('/create-payment-intent', { price: Donation })
        .then(res => {
          console.log('lllllllll', res.data.clientSecret)
          setclientSecret(res.data.clientSecret)
        })
      }
   
  }, [Donation])

console.log(stringClientSecret);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const from = event.target
    const Name = from.Donation.value
    setDonation(Name);

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

   

    const {paymentIntent, error:carderror} = await stripe.confirmCardPayment(
      stringClientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName ||'user no Name',
          email:user?.email || 'user no Name',
          },
        },
      },
    );


    if(carderror){
      console.log('error',carderror);
      
    }
    else{
      console.log('mmmm',paymentIntent);
      if(paymentIntent.status==="succeeded"){
        const paymentInpho={
          name: user?.displayName ,
          email:user?.email,
          Date:new Date(),
          paymentIntentamount : paymentIntent.amount,
          Id:_id
          
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your payment is success",
          showConfirmButton: false,
          timer: 1500
        });
const res = ax.post('/paymentIntent',paymentInpho)
console.log(res);




       

      }
      
    }
  }
  return (
    <div>
      <div>
        <form className="max-w-sm mx-auto mb-4">

        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donation Amount</label>
        <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Donation Amount" name="Donation" required />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Nambar</label>
        <CardElement
          className=""
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                width: '200px',
                '::placeholder': {
                  color: '#aab7c4',

                },

              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-7" type="submit" disabled={!stripe }>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;