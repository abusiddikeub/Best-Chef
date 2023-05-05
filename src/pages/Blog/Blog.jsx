import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const Blog = () => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin:'20px',
      padding:'10px'
     
    },
    
    viewer: {
      width: window.innerWidth,
      height: window.innerHeight,
     margin:'auto'
    },
  });

  return (
  
 <PDFViewer style={styles.viewer} >
     
     <Document>
      
       <Page size="A4" style={styles.page}>
         <View style={styles.section}>
        
         </View>
         <View style={styles.section}>
          <Text style={{color:"red"}}> 1 .Tell us the differences between uncontrolled and controlled components ? </Text>
          <Text> Ans: In React, controlled components refer to components that have their <br /> state and behavior controlled by the parent component. These components rely on props <br /> passed down from the parent component to update their state and behavior. Uncontrolled components refer to <br /> components that manage their own state internally.</Text> 
          <Text style={{color:"green"}}>2.How to validate React props using PropTypes ? </Text>
          <Text>As your app grows, you can catch a lot of bugs with typechecking. For some applications, <br /> you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. <br /> But even if you don’t use those, React has some built-in typechecking abilities. To run <br /> typechecking on the props for a component, you can assign the special propTypes property</Text> <br />
          <Text style={{color:"blue"}}> 3. Tell us the difference between nodejs and express js.?</Text>
          <Text>Express is a minimal and flexible node. js web application framework, <br /> providing a robust set of features for building single and multi-page, and hybrid web applications. <br /> On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</Text>
          <Text style={{color:"red"}}> 4.What is a custom hook, and why will you create a custom hook? </Text>
          <Text>Custom React JS hooks offer reusability as when a custom hook is created, <br /> it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as <br /> a custom hook does not need to be rendered again and again while rendering the whole code</Text>
         </View>
       </Page>
     </Document>
   </PDFViewer>

 
  );
};

export default Blog;
