import "./Chapter1.css"
import {useState} from "react";
import Example1 from "../../ExampleGroup/Example1/Example1";
import Example2 from "../../ExampleGroup/Example2/Example2";
import Example3 from "../../ExampleGroup/Example3/Example3";
import Example4 from "../../ExampleGroup/Example4/Example4";
import Example5 from "../../ExampleGroup/Example5/Example5";


export default function Chapter1 () {
    return (
        <>
            <h1>Chapter1</h1>
            <Example1></Example1>
            <hr/>

            <Example2></Example2>
            <hr/>

            <Example3></Example3>
            <hr/>

            <Example4></Example4>
            <hr/>

            <Example5></Example5>
            {/*<section><title>Quick Start Example 5</title>*/}
            {/*    <MyApp3></MyApp3>*/}
            {/*</section>*/}
        </>
    );
}