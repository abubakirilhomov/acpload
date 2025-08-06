import React from 'react'
import AnimatedContent from '../../../components/ReactBits/AnimatedContent'
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsFillQuestionSquareFill, BsNewspaper } from "react-icons/bs";
import { FiMail, FiUsers } from 'react-icons/fi';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';

const topics = [
  "Account Registration & Verification",
  "Password Recovery & Security",
  "Posting & Managing Loads",
  "Searching for Loads or Trucks",
  "Ratings, Reviews, and Disputes",
  "Billing & Subscription Questions",
  "Technical Issues & Bug Reporting",
  "Profile & Company Information Updates",
  "API & Partner Integration Support"
];

const SupportCenter = () => {
  return (
    <>
      {/* Header */}

      <Section1 />


      <Section2 />
      {/* Popular Support Topics */}
      <Section3 topics={topics} />

      <Section4 />

      <Section5 />

      <Section6 />

    </>
  )
}

export default SupportCenter