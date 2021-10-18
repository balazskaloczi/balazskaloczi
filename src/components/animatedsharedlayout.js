import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"

export default function App() {
  return (
    <AnimateSharedLayout >
      <motion.ul layout className="container" >
        {items.map(item => (
          <Item key={item.id} title={item.title} subtitle={item.subtitle} description={item.description} preview={item.preview} site={item.site}/>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({title, subtitle, description , site , preview}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen}np>
      <motion.div layout >
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </motion.div>
        <AnimatePresence>{isOpen && <Content subtitle={subtitle} description={description} site={site} preview={preview} isOpen={isOpen} setIsOpen={setIsOpen}/>}</AnimatePresence>
    </motion.li>
  );
}

function Content({description ,site, isOpen, setIsOpen}) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const toggleOpen = () => {
    setPreviewOpen(!previewOpen)
    setIsOpen(isOpen)
  };
  
  return (
    <motion.div       layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration:1}}>
      <p>{description}</p>
      <div className="buttons">
        <a className={previewOpen ? "preview image" : "preview" } onClick={toggleOpen} target='_blank' rel="noopener noreferrer">Preview</a>
        <a className="site" href={site} target='_blank' rel="noopener noreferrer">Site</a>
      </div>
    </motion.div>
  );
}

const items = [
  {
  "id" : 0,
  "title" : "TranslateList",
  "subtitle" : "A multi-language translator created with Microsoft Azure's database",
  "description" : "One page website, designed with material UI and running on React. As i writed in the subtitle it uses Microsoft Azure's Translator API. It can save words and sentences to the device's local storage and delete  with a button.",
  "preview" : "https://www.google.com",
  "site" : "https://translatelist.netlify.app/"
  }
  ,{
  "id" : 1,
  "title" : "MyWebshop",
  "subtitle" : "An e-commerce shop created with commerce.js, stripe",
  "description" : "A fully functional sample e-commerce shop created in react. Frontend is styled with material ui and the back end is the commerce JS API. At a purchase the customer has to use '42' repeatedly at the bank card inforation get an e-mail confirmation of the purchase",
  "preview" : "https://www.google.com",
  "site" : "https://balazskaloczishop.netlify.app/"
  }
];