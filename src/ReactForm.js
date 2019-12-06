import React from 'react'

class ReactForm extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName : '',
            lastName : '',
            lanOptions :'',
            isFriendly : true,
            language : "",
            multiFruit:['mango']

        }
    }

    handleChange =(event) =>{
           const {name,value,type,checked} = event.target;
           let options = event.target.options;
    
          // let multiSelectOption = [];
          

var x = x || [];

    
                   

           for(let i = 0; i < options.length; i++) {
            if( options[i].selected ) {

             
              x.push(options[i].value);
            }
        }



           type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: x })

      
   
       console.log(multiSelectOption)
      
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
              name="lanOptions"
              onChange = {this.handleChange}
             checked ={this.state.lanOptions==="Option 1"}
             value ="Option 1"
            />
            Option 1
         
    

   
          
            <input
              type="radio"
              name="lanOptions"
              onChange = {this.handleChange}
              checked ={this.state.lanOptions==="Option 2"}
              value ="Option 2"
            />
            Option 2
         
        
       
       
            <input
              type="radio"
              name="lanOptions"
              onChange = {this.handleChange}
              checked ={this.state.lanOptions==="Option 3"}
              value ="Option 3"
            />
            Option 3
          </label>
          <label>
            <input 
              type ="checkbox"
              name ="isFriendly"
              checked = {this.state.isFriendly}
              onChange = {this.handleChange}
              />
          </label>
        
          <br />
          <label>
            <select name="language" value={this.state.language} onChange={this.handleChange}>
              <option value="php">PHP</option>
              <option value ="python">Python</option>
              <option value ="javascript">Javascript</option>
            </select>
            </label>

             <br/>
             <label>
               <select
                multiple={true}
                 name ="multiFruit" 
                 value={this.state.multiFruit} 
                 onChange={this.handleChange}>
                   <option value="mango">Mango</option>
                   <option value="jackfruit">jackfruit</option>
                   <option value="pears">Pears</option>
                   <option value ="strawberry">Strawberry</option>
                </select>   

              
               </label>

                </form>
                {this.state.firstName} {this.state.lastName}
                My Favorite Language : {this.state.language}
             </div>   
        )
    }

}

export default ReactForm
