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
            url:'/RL Tool'
        },
        {
            heading:'Validation Tool',
            url:'/Validation Tool'
        },
    ]
},
{
    name:'Tools',
    link:'/LOM'
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