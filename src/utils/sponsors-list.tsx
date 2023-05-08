import { sponsorsListType } from "./types";
import Sponsor1 from '../assets/images/sponsors/altair.png'
import Sponsor2 from '../assets/images/sponsors/IoEI.png'
import Sponsor3 from '../assets/images/sponsors/UOS.png'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export const sponsorsList:sponsorsListType=[

    {
        title:"ALTAIR",
        image:Sponsor1,
        links:[
            {
                Icon:< AiFillTwitterCircle className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            },
            {
                Icon:<FaFacebook className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            },
            {
                Icon:<AiFillLinkedin className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            }
        ]
    },
    {
        title:"University Of Stuttgart",
        image:Sponsor2,
        links:[
            {
                Icon:<AiFillTwitterCircle className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            },
            {
                Icon:<FaFacebook className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            },
            {
                Icon:<AiFillLinkedin className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            }
        ]
    },
    {
        title:"Institute of Entrepreneurship and Innovation Science",
        image:Sponsor3,
        links:[
            {
                Icon:<AiFillTwitterCircle className="text-4xl"/>,
                URL:"https://twitter.com/altair_inc"
            },
        ]
    },

]

