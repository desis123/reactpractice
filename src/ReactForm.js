import React from 'react'

class ReactForm extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName : '',
            lastName : ''

        }
    }

    handleChange =(event) =>{
           const {name,value} = event.target;

        this.setState (
            { [name] : value }
           
        )
       console.log(event.target.value)
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                    type="text" 
                    name ="firstName"
              
                     placeholder="First Name" 
                     onChange ={this.handleChange}>
                    </input>


                    <input 
                    type="text" 
                    name = "lastName"
                    
                     placeholder="Last Name" 
                     onChange ={this.handleChange}>
                    </input>

               
                 
          <label>
            <input
              type="radio"
              name="react-tips"
              onChange = {this.handleChange}
         
           
            />
            Option 1
         
    

   
          
            <input
              type="radio"
              name="react-tips"
              onChange = {this.handleChange}
             
            />
            Option 2
         
        
       
       
            <input
              type="radio"
              name="react-tips"
              onChange = {this.handleChange}
              
            />
            Option 3
          </label>
        

                </form>
                {this.state.firstName} {this.state.lastName}
             </div>   
        )
    }

}

export default ReactForm
