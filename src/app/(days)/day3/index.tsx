import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";


const description = `
  # Markdown

  Todays Agenda: 
  - Introduction to MarkDown
  - Markdown Syntax Overview
  - Setting Up React Native for Markdown
  - Implementing Markdown Rendering
  - Styling Markdown Content
  - Using Markdown in React Native Components
  - Recap and Q&A Session
`


export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges = {['bottom']} style = {{flex: 1}}>
      <Stack.Screen options={{ title: "Day 3: MarkDown" }} />
      
      <MarkDownDisplay>{description}</MarkDownDisplay>

      <Link href={`/day3/editor`} asChild>
        <Button title="Go to Editor" />
      </Link>
    </SafeAreaView>
  );
}
