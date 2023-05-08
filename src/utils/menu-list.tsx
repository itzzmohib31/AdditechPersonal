import { menuListType } from "./types";


export const menuList:menuListType=[
{
    name:'Home',
    link:'/'
},
{
    name:'Services',
    link:'/',
    isDropdown:true,
    dropdownData:[
        {
            heading:'RL Tool',
            url:'/'
        },
        {
            heading:'Validation Tool',
            url:'/'
        },
    ]
},
{
    name:'About',
    link:'/'
},
{
    name:'Contact Us',
    link:'/contactus'
},


]