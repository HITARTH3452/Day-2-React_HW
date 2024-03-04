const root = document.getElementById("root");

const heading1 = React.createElement("h1",{},"Topics Covered");
const para = React.createElement("p",{},"The following is list of all the topics we cover in the MDN learning area");

const a1 = React.createElement("a",{
    href : "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
},"Getting started with the web");
const p1 = React.createElement("p",{
    style :{
        marginLeft: "10px"
    }
},"Provides a practical introduction to web development for complete beginners");

const a2 = React.createElement("a",{
    href : "https://developer.mozilla.org/en-US/docs/Learn/HTML"
},"HTML - structure the web");
const p2 = React.createElement("p",{
    style :{
        marginLeft: "10px"
    }
},"HTML is the standard markup language for Web pages. With HTML you can create your own Website.HTML is easy to learn - You will enjoy it!");

const a3 = React.createElement("a",{
    href : "https://developer.mozilla.org/en-US/docs/Web/CSS"
},"CSS - styling the web");
const p3 = React.createElement("p",{
    style :{
        marginLeft: "10px"
    }
},"CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.This tutorial will teach you CSS from basic to advanced.");

const div0 = React.createElement("div",{
    style:{
        paddingBottom: "20px",
    }
},[heading1,para])
const div1 = React.createElement("div",{},[a1,p1]);
const div2 = React.createElement("div",{},[a2,p2]);
const div3 = React.createElement("div",{},[a3,p3]);


const div = React.createElement("div",{
    style: {
        margin: "100px",
    }
},[div0,div1,div2,div3]);

ReactDOM.render(div,root);