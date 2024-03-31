import './App.css';

function App() {
  const details = 
  [
    {
      type: "FREE",
      price: "$0/",
      month: "month",
      features: 
      [
        {
          icon: "✔",
          content: "Single User"
        },
        {
          icon: "✔",
          content: "50GB Storage"
        },
        {
          icon: "✔",
          content: "Unlimited Public Projects"
        },
        {
          icon: "✔",
          content: "Community Access"
        },
        {
          icon: "✖",
          content: "Unlimited Private Projects"
        },
        {
          icon: "✖",
          content: "Dedicated Phone Support"
        },
        {
          icon: "✖",
          content: "Free Subdomain"
        },
        {
          icon: "✖",
          content: "Monthly Status Reports"
        }
      ]
    },
    {
      type: "PLUS",
      price: "$9/",
      month: "month",
      features: 
      [
        {
          icon: "✔",
          content: "5 User"
        },
        {
          icon: "✔",
          content: "50GB Storage"
        },
        {
          icon: "✔",
          content: "Unlimited Public Projects"
        },
        {
          icon: "✔",
          content: "Community Access"
        },
        {
          icon: "✔",
          content: "Unlimited Private Projects"
        },
        {
          icon: "✔",
          content: "Dedicated Phone Support"
        },
        {
          icon: "✔",
          content: "Free Subdomain"
        },
        {
          icon: "✖",
          content: "Monthly Status Reports"
        }
      ]
    },
    {
      type: "PRO",
      price: "$49/",
      month: "month",
      features: 
      [
        {
          icon: "✔",
          content: "Unlimited User"
        },
        {
          icon: "✔",
          content: "50GB Storage"
        },
        {
          icon: "✔",
          content: "Unlimited Public Projects"
        },
        {
          icon: "✔",
          content: "Community Access"
        },
        {
          icon: "✔",
          content: "Unlimited Private Projects"
        },
        {
          icon: "✔",
          content: "Dedicated Phone Support"
        },
        {
          icon: "✔",
          content: "Free Subdomain"
        },
        {
          icon: "✔",
          content: "Monthly Status Reports"
        }
      ]
    }
  ]
  return (
    <div className="App">
      {
        details.map((item) => {
          return (
            <Display detail = {item}/>
          )
        })
      }
    </div>
  );
}

function Display({detail}){
  const features = detail.features;
  return (
    <div className='card'>
      <p className='display-type'>{detail.type}</p>
      <h1 className='display-price'>{detail.price}<span className='display-month'>{detail.month}</span></h1>
      <hr></hr>
      <div className='card-body'>
        {
          features.map((item) => {
            return (
              <DisplayFeatures icons = {item.icon} contents = {item.content}/>
            )
            
          })
        }
      </div>
      <button className='btn btn-primary'>BUTTON</button>
    </div>
  )
}

function DisplayFeatures({icons, contents}){
  if(icons === "✔"){
    return (
      <div className='display-features-right'>
        <p className='display-icons-right display-icons'>{icons}</p>
        <p className='display-contents-right display-contents'>{contents}</p>
      </div>
    )
  }else{
    return (
      <div className='display-features-wrong'>
        <p className='display-icons-wrong display-icons'>{icons}</p>
        <p className='display-contents-wrong display-contents'>{contents}</p>
      </div>
    )
  }
}

export default App;