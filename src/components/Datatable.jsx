import React from 'react';

const Datatable = ({data}) => {
    const objectData=data;
    const columns=data[0]&&Object.keys(data[0]);
    // const array=[...data]

//objectData.map(object=>console.log("my obj ",object))


    return ( <table cellPadding={3} cellSpacing={25} >
        <thead>
            <tr>{data[0]&&columns.map((heading)=><th>{heading}</th>)}</tr>
        </thead>
        <tbody>

           <tr> 
               <td>{objectData[0]['id']}</td>
               <td>{objectData[0]['customer']['name']}</td>
               <td>{objectData[0]['branch']}</td>
               <td>{objectData[0]['service']}</td>
               <td>{objectData[0]['status']}</td>
               <td>{objectData[0]['reference']}</td>
               <td>{objectData[0]['addedby']}</td>
           </tr>

           <tr> 
               <td>{objectData[1]['id']}</td>
               <td>{objectData[1]['customer']['name']}</td>
               <td>{objectData[1]['branch']}</td>
               <td>{objectData[1]['service']}</td>
               <td>{objectData[1]['status']}</td>
               <td>{objectData[1]['reference']}</td>
               <td>{objectData[1]['addedby']}</td>
           </tr>


           <tr> 
               <td>{objectData[1]['id']}</td>
               <td>{objectData[1]['customer']['name']}</td>
               <td>{objectData[1]['branch']}</td>
               <td>{objectData[1]['service']}</td>
               <td>{objectData[1]['status']}</td>
               <td>{objectData[1]['reference']}</td>
               <td>{objectData[1]['addedby']}</td>
           </tr>


           <tr> 
               <td>{objectData[2]['id']}</td>
               <td>{objectData[2]['customer']['name']}</td>
               <td>{objectData[2]['branch']}</td>
               <td>{objectData[2]['service']}</td>
               <td>{objectData[2]['status']}</td>
               <td>{objectData[2]['reference']}</td>
               <td>{objectData[2]['addedby']}</td>
           </tr>


           <tr> 
               <td>{objectData[3]['id']}</td>
               <td>{objectData[3]['customer']['name']}</td>
               <td>{objectData[3]['branch']}</td>
               <td>{objectData[3]['service']}</td>
               <td>{objectData[3]['status']}</td>
               <td>{objectData[3]['reference']}</td>
               <td>{objectData[3]['addedby']}</td>
           </tr>

           <tr> 
               <td>{objectData[4]['id']}</td>
               <td>{objectData[4]['customer']['name']}</td>
               <td>{objectData[4]['branch']}</td>
               <td>{objectData[4]['service']}</td>
               <td>{objectData[4]['status']}</td>
               <td>{objectData[4]['reference']}</td>
               <td>{objectData[4]['addedby']}</td>
           </tr>

        </tbody>
    </table> );
}
 
export default Datatable;