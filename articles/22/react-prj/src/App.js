import React      from "react";
import Background from "./components/Background";
import Title      from "./components/Title";
import Subtitle   from "./components/Subtitle";
import './App.css';

const image = "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=1920&q=100";

export default function App() {
  return (
    <Background image={image}>
      <Title text="JSMonday Rocks" />
      <Subtitle text="Let’s generate a beautiful image out of this React scene" />
    </Background>
  );
}