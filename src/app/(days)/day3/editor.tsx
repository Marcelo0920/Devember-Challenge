import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { Children, useState } from "react";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { TextInput } from "react-native-gesture-handler";

export default function editor() {

  const copy = `# My Markdown Editor

  Hello **world**
`;


  const [content, setContent] = useState(copy)
  const [tab, setTab] = useState("edit")


  return (
    <View style = {styles.page}>

      <View style = {styles.tabsContainer}>
        <Pressable onPress={() => setTab("edit")} style = {[styles.tab, {borderColor : tab == "edit" ? "pink" : "gray"}]}>
        <Text style = {styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable  onPress={() => setTab("preview")}  style = {[styles.tab, {borderColor : tab == "preview" ? "mediumrchid" : "gray"}]}>
        <Text style = {styles.tabText}>Preview</Text>
        </Pressable>
      </View>


    {tab == "edit" ? (
 <TextInput onChangeText={setContent} value={content} multiline numberOfLines={50} style={styles.input} /> 
    ) : (
<MarkDownDisplay >{copy}</MarkDownDisplay>
    )}
    </View>
   
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    borderRadius: 10,
    paddingTop: 20,
    fontSize: 15,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray"
    ,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center"
  },
  tabText: {
    fontFamily: "InterBold"
  }
});


