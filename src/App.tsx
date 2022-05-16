import React from "react";
import getUsers from './components/getUsers';
import {Items, ContentSidebar,Content,Sidebar, Counter, StyledFontAwesomeIcon, ButtonContainer,Button, SearchContainer, SearchBar} from './components/styles';
import {useState} from "react";
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

var counter = Array<number>(101).fill(0);

var x = Array<boolean>(101).fill(true);

const App: React.FC = () => {

const [searchTerm,setSearchTerm]=useState("");
const [list, updateList] = useState(getUsers());

function dif0(id: number) {
  if(counter[id]) {
    return <Counter> {counter[id]} </Counter>;
  }
}

const handleRemoveItem = (name:String) => {
  {updateList(list.filter(item => item.name !== name))};
 };

 const [isVisible, setIsVisible] = useState<Array<boolean>>(x);
 const [count, setCount] = useState<Array<number>>(counter);

 function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

const Users = list.filter((item) => {
  if(searchTerm ==""){
    return item;
  }
  else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return item;
  }
}).map((item) => {
  return (
    <Items key = {item.id}>
      <ButtonContainer animate={isVisible[item.id] ? "visible" : "hidden"}>
          <Button onClick = {() => {counter[item.id] = counter[item.id]+1; setCount(counter);}}>
            {item.name}
          </Button>
         {count[item.id]?(<Counter>{count[item.id]}</Counter>):""}
            <StyledFontAwesomeIcon key = {item.id} icon={faTimes} onClick = {async() => {x[item.id]=false;setIsVisible(x);await delay(1000);handleRemoveItem(item.name)}  }/>
      </ButtonContainer>
  </Items>
  )
})

  return (
    <ContentSidebar>
      <Sidebar>
      <SearchContainer>
      <AiOutlineSearch 
          style={{
            position: 'absolute',
            left: '5%'
          }}
          size="22px" 
          color="white"/>
      <SearchBar type="text" 
             placeholder="Search" 
             onChange={(event) => {setTimeout(() => {setSearchTerm(event.target.value);}, 300)}}/>
      </SearchContainer>
      </Sidebar>
      <Content>
          {Users}
      </Content>
     </ContentSidebar>
  );
};

export default App;