import React, { Component } from 'react';

export default (ChildComponent, storageType) => {

    class ComposedComponent extends Component {
        setItemHandler = (key, value)=>{
            window[storageType+"Storage"].setItem(key, value)
        }
        getItemHandler = (key)=>{
            return window[storageType+"Storage"].getItem(key)
        }
        removeItemHandler = (key)=>{
            window[storageType+"Storage"].removeItem(key)
        }

        render (){
            console.log("type i HOC", storageType)
            return <ChildComponent 
                    setItem={this.setItemHandler}
                    getItem={this.getItemHandler}
                    removeItem={this.setItemHandler}
                    storageType={storageType}/>;
        }
    }

    return ComposedComponent
}