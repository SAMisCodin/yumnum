import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>YumNum LTD - Home Page</title>
        <meta name="description" content="Your one stop shop for wholesale catering goods."/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Lobster&family=Permanent+Marker&display=swap" rel="stylesheet"></link>

        
      </Head>

      <main>
      <div id="mainOuterDiv">
        <div id="myHeader">
            <div id="Logo">
                <img src="./images/small-logo.png"/>
            </div>
            <div id="Menu">
                <ul>
                    <li id="menuAboutBtn">
                        What We Do?
                    </li>
                    <li id="menuContactBtn">
                        Contact Us                        
                    </li>
                </ul>
            </div>
        </div>
        <div id="myHeadingDiv">
            <div id="centerDiv">
                <div id="headingHolder">
                    <h1>Yum<br/>&nbsp;&nbsp;&nbsp;&nbsp;Num</h1>
                <br/><p>Your one stop shop for wholesale catering goods.</p>
                </div>
            </div>
        </div>
        <div id="whatWeDoDivOuter">
            <div id="whatWeDoDiv">
                <div id="whatWeDoHolder">
                    <h2>What We Do?</h2>
                </div>
                <div id="whatWeDoData">
                    <p>YumNum are committed to bringing you the best quality kitchen equipment at the most affordable prices. Supplying convenience stores, e-commerce catering specialists and professional chefs. We are the reliable supplier your business needs.</p>
                </div>
            </div>
        </div>
        <div id="contactUsDiv">
            <div id="contactUsHolder">                
                <div id="ContactUsHolder">
                    <h2>Contact Us</h2>
                </div>                
                <p>For our full product range and prices please either:</p>
                <div id="ContactUsData">
                    <p>Email us: <a href="mailto:sales@yumnum.co.uk">sales@yumnum.co.uk</a></p>
                    <p>Call On: 07496608470</p>
                </div>
            </div>
        </div>
        <div id="footerDiv">
            <p>This website is ran and owned by YumNum Ltd. Company Number: 14076707. Registered Office: 20-22 Wenlock Road, London, N1 7GU.</p>
        </div>
    </div>
      </main>
    </>
  )
}
