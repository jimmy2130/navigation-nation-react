import React from 'react';
import MenuBar from './components/menu-bar/menu-bar.component';
import HomeSection from './components/home-section/home-section.component';
import SectionBlock from './components/section-block/section-block.component';
import MenuOverlay from './components/menu-overlay/menu-overlay.component';
import { Toggle } from './utils/toggle.js';
import section from './sectionInfo.js';
function App() {

  const toggleFunc = Toggle();
  const contentBlock = section.slice(1);

  return(
  <div>
    <MenuOverlay {...toggleFunc}/>
    <MenuBar {...toggleFunc}/>
    <HomeSection />
    {contentBlock.map(item => (
      <SectionBlock key={item.id} {...item}>
      </SectionBlock>
    ))}
  </div>
  )
}

export default App;
