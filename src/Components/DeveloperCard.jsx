import React from 'react'

const DeveloperCard = () => {
  return (
    <>
        <div className="talent--card developer--card">
            <div className="talent--card--background">
                
            </div>
            <div className="talent--image--wrapper">
                <img
                src={require(`../images/argel.png`)}
                alt="Argel Miralles"
                />
            </div>
            <div className="talent--card--info">
                <div className="talent--card--header">
                <h4 className="talent--card--name">Argel Miralles</h4>
                <h4 className="talent--card--role">
                    Lead Developer
                </h4>
                <h4 className="talent--card--website">
                    <a href="https://argelmiralles.netlify.app/"  className='developer--portfolio'>argelmiralles.netlify.app</a>
                </h4>
                </div>
               
            </div>
         </div>

         <div className="talent--card developer--card">
            <div className="talent--card--background">
                
            </div>
            <div className="talent--image--wrapper">
                <img
                src={require(`../images/erwin.jpg`)}
                alt="Erwin Ibarra"
                />
            </div>
            <div className="talent--card--info">
                <div className="talent--card--header">
                <h4 className="talent--card--name">Erwin Ibarra</h4>
                <h4 className="talent--card--role">
                    Front End Developer 
                </h4>
                <h4 className="talent--card--website">
                    <a href="https://airwhen09.github.io/ErwinIbarra/"  className='developer--portfolio'>airwhen09.github.io/ErwinIbarra</a>
                </h4>
                </div>
               
            </div>
         </div>

         <div className="talent--card developer--card">
            <div className="talent--card--background">
                
            </div>
            <div className="talent--image--wrapper">
                <img
                src={require(`../images/gianmiguel.jpg`)}
                alt="Gian Miguel Dela Cruz"
                />
            </div>
            <div className="talent--card--info">
                <div className="talent--card--header">
                <h4 className="talent--card--name">Gian Miguel Dela Cruz</h4>
                <h4 className="talent--card--role">
                UI/EX Engineer
                </h4>
                <h4 className="talent--card--website">
                    <a href="https://gianmiguel.github.io/e-Portfolio/" className='developer--portfolio'>gianmiguel.github.io/e-Portfolio</a>
                </h4>
                </div>
               
            </div>
         </div>
         
    </>
  )
}

export default DeveloperCard