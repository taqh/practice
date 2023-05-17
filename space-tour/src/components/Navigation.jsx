
function Navigation() {
  return (
     <>
      <a className="skip-to-content sr-only" href="#main" style="color:white">Skip to content</a>
         <header className="primary__header flex">
         <div>
            <img src="images/shared/logo.svg" alt="space tourism logo" className="logo"></img>
         </div>
         <button className="mobile-nav-toggle toggle"  aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only" aria-expanded="false">Menu</span></button>
         <nav>
            <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators toggle flex">
                  <li className="active"><a className="ff-sans-cond uppercase txt-white letter-spacing-2" href="#"><span aria-hidden="true">00</span>Home</a></li>
                  <li><a className="ff-sans-cond uppercase txt-white letter-spacing-2" href="destination.html"><span aria-hidden="true">01</span>Destination</a></li>
                  <li><a className="ff-sans-cond uppercase txt-white letter-spacing-2" href="crew.html"><span aria-hidden="true">02</span>Crew</a></li>
                  <li><a className="ff-sans-cond uppercase txt-white letter-spacing-2" href="technology.html"><span aria-hidden="true">03</span>Technology</a></li>
            </ul>
         </nav>
      </header>
   </>
  )
}

export default Navigation