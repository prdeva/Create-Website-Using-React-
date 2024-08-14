import React,{component} from 'react';
import './style.css';

class Content extends React.Component{
    render(){
        return(
            <div className='content'>
             <div className='table1'>
                <table>
                    <tr>
                        <th>S.no</th>
                        <th>COllege</th>
                        <th>Register Number</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year Of Passing</th>
                    </tr>
                    <tr>
                    <td>01</td>
                    <td>HINDUSTHAN </td>
                    <td>720721110064</td>
                    <td>DEVA P</td>
                    <td>INFORMATION TECHNOLOGY</td>
                    <td>2021-2025</td>
                    </tr>
                    <tr>
                    <td>01</td>
                    <td>HINDUSTHAN </td>
                    <td>720721110061</td>
                    <td>NEYAPRAKASH</td>
                    <td>COMPUTER SCIENCE</td>
                    <td>2021-2025</td>
                    </tr>
                    <tr>
                    <td>01</td>
                    <td>HINDUSTHAN </td>
                    <td>720721110063</td>
                    <td>BHARATHKUMAR</td>
                    <td>INFORMATION TECHNOLOGY</td>
                    <td>2021-2025</td>
                    </tr>
                    <tr>
                    <td>01</td>
                    <td>HINDUSTHAN </td>
                    <td>720721110001</td>
                    <td>GOKUL</td>
                    <td>MECHANICAL</td>
                    <td>2021-2025</td>
                    </tr>
                    <tr>
                    <td>01</td>
                    <td>HINDUSTHAN </td>
                    <td>720721110064</td>
                    <td>DEVA P</td>
                    <td>INFORMATION TECHNOLOGY</td>
                    <td>2021-2025</td>
                    </tr>
                </table>
                

                </div>
                <div className='form2'>
                    <form className='form1'>
                        <label>USER NAME:</label>
                        <input type='txt'placeholder='username eg:(ramkumar)'></input>
                        <label>PASSWORD:</label>
                        <input type='txt'placeholder='enter password'></input>
                        <button>Submit</button>
                       
                    </form>
                   
                </div>

            </div>
            
           
        
        );
    }
}

export default Content;