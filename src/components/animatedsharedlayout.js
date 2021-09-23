import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../css/animatedshardlayout.css"

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function App() {
  return (
    <AnimateSharedLayout>
      <motion.ul className="container" layout >
        {items.map(item => (
          <Item key={item.id} title={item.title} subtitle={item.subtitle} description={item.description}/>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({title, subtitle, description}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 15 }}>
      <motion.div layout >
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </motion.div>
      <AnimatePresence>{isOpen && <Content subtitle={subtitle} description={description} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({description}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div >
      <p>{description}</p>
      </div>
    </motion.div>
  );
}

const items = [
  {
  "id" : 0,
  "title" : "TranslateList",
  "subtitle" : "A multi-language translator created with Microsoft Azure's database",
  "description" : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain'"
  },{
  "id" : 1,
  "title" : "MyWebshop",
  "subtitle" : "An e-commerce shop created with commerce.js, stripe",
  "description" : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'"
  }];