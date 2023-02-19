import React, {useState} from 'react';
import { intern1, intern2,intern3,intern4,intern5,intern6,intern7,intern8,intern9,intern10, intern11, intern13, intern12, intern14, intern15, intern16, intern17, intern18, intern19, intern20 } from '../images';
import Internslist from './Internslist';



export default function Interns() {
  const [interns] = useState([
    {learningPath:`Frontend`,name: `Jeffrey Yung`, Grade: 96,id:1, email:'jeffreyyung@gmail.com',image:intern1,phoneNumber: 2349045678456},
    {learningPath:`Frontend`,name: `Reece James `, Grade: 97,id:2,email:'reecejames@gmail.com',image:intern2,phoneNumber: 23490679294},
    {learningPath:`Frontend`,name: `Edward Gallgher`, Grade: 90,id:3,email:'edwardgal124@gmail.com',image:intern3,phoneNumber: 23490487836},
    {learningPath:`Frontend`,name: `Kim Yung`, Grade: 89,id:4,email:'yungkim@gmail.com',
    image:intern4,phoneNumber: 234906778456},
    {learningPath:`Frontend`,name: `Emily Yang`, Grade: 74,id:5,email:'emilyyang@gmail.com',
    image:intern5,phoneNumber: 234706969999},
    {learningPath:`Frontend`,name: `Ernest Beckamp`, Grade: 69,id:6,email:'beckampernest@gmail.com',
    image:intern6,phoneNumber: 234818989366},
    {learningPath:`Frontend`,name: `Bakambo Ossei`, Grade: 93 ,id:7 ,email:'osseibakambo1@gmail.com',
    image:intern7,phoneNumber: 2349045670067},
    {learningPath:`Frontend`,name: `Sean Humphrey`, Grade: 78,id:8,email:'humphreysean@gmail.com',
    image:intern8,phoneNumber: 2349045689002},
    {learningPath:`Frontend`,name: `Scott Lennox`, Grade: 97 ,id:9,email:'scottlennox@gmail.com',
    image:intern9,phoneNumber: 234904198756},
    {learningPath:`Frontend`,name: `Charles Stones`, Grade: 91,id:10,email:'charlesstones1@gmail.com',
    image:intern10,phoneNumber: 234904619146},
    {learningPath:`Frontend`,name: `John Jango`, Grade: 99,id:11, email:'jangojohn@gmail.com',image:intern11,phoneNumber: 2349048989567},
    {learningPath:`Frontend`,name: `Remy Martins `, Grade: 97,id:12,email:'remymartins003@gmail.com',image:intern12,phoneNumber: 234904678939},
    {learningPath:`Frontend`,name: `Lily White`, Grade: 90,id:13,email:'whitelily@gmail.com',image:intern13,phoneNumber: 234904677356},
    {learningPath:`Frontend`,name: `Richard Mercury`, Grade: 95,id:14,email:'mercuryrich@gmail.com',
    image:intern14,phoneNumber: 234807899456},
    {learningPath:`Frontend`,name: `Emma Long`, Grade: 77,id:15,email:'emmalong001@gmail.com',
    image:intern15,phoneNumber: 234708678456},
    {learningPath:`Frontend`,name: `Luke Vance`, Grade: 69,id:16,email:'vancecodes@gmail.com',
    image:intern16,phoneNumber: 2349045787283},
    {learningPath:`Frontend`,name: `Ben Yaeger`, Grade: 91 ,id:17 ,email:'benyaeger@gmail.com',
    image:intern17,phoneNumber: 2349044798222},
    {learningPath:`Frontend`,name: `Tony Pascal`, Grade: 87,id:18,email:'tonypascal@gmail.com',
    image:intern18,phoneNumber: 2349045728901},
    {learningPath:`Frontend`,name: `Samuel Zack`, Grade: 98 ,id:19,email:'samuelzack@gmail.com',
    image:intern19,phoneNumber: 2349046782345},
    {learningPath:`Frontend`,name: `Thompson Thomas`, Grade: 90,id:20,email:'thompsthomas@gmail.com',
    image:intern20,phoneNumber: 2347078234567},
  ]);
  return (
    <div className='interns'>
      <Internslist interns={interns.filter((intern)=>intern.id === 11 )} title="Highest Graded Intern" />
      <Internslist interns={interns} title =" Grade Of Each Intern" />
      </div>
  )
}