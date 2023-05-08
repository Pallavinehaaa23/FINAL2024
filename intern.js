const boxdata=[
    {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
    title:'summer internship',
    desc:'may to june'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
        },
    
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
        
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     }, {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7mx68TLUSX_eRE68lAMoP54AxIbOfZ0wz3YyusHjI71MfBWZxLQRBd08aa25vxbMYhB2TLn7n30&usqp=CAU&ec=48665701',
        title:'summer internship',
        desc:'may to june'
     },
     
      
]
const postcontainer=document.querySelector('.expintern');
const postmethods =()=>{
     boxdata.map((cardData)=>{
        const postelement=document.createElement('div');
        postelement.classList.add('box');
        postelement.innerHTML =` 
       
        <div class="front">
        <img src=${cardData.img}  alt="" srcset="" / >
        </div>
        <div class="back">
         <h2>${cardData.title}</h2>
         <p>${cardData.desc}</p>
        
         <div class="btns">
         <a href="#"><button type="submit">Github profile</button></a>
         <a href="#"><button type="submit">LinkedIn profile</button></a>

    </div>
         </div>
     
     `
       postcontainer.appendChild(postelement);
     })
}
postmethods()
