import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';
import Message from "./postTweet/message";
import TextArea from './postTweet/post-tweet';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            newMessage: '',
            img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            messages: [
                {
                    id: 1,
                    profile: "academlo",
                    content: ` Hola!!! este es un mensaje.`,
                    img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                    date: new Date()
                }
            ]
        }
    }

<<<<<<< HEAD
    sendMessage = () => {
        //Copiamos el arreglo de mensajes
        // const messagesClone = [...this.state.messages];
        const messagesClone2 = JSON.parse(JSON.stringify(this.state.messages));
        const newMessageObj = {
          id: 1,
          profile: "Academlo",
          content: this.state.newMessage,
          img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
          date: new Date()
        };
        //Agregar un mensaje dentro del estado messages
        messagesClone2.push(newMessageObj); //problema
        //Actualizar el estado y quitamos el valor del mensaje
        this.setState({ messages: messagesClone2, newMessage: "" });
      };
    handleInput = (evento) => {
        //capturar lo que escriibe el mensaje
        const message = evento.target.value;
        this.setState({newMessage: message});

    } 

    removeTweet = (index) => {
        //Clonar la lista de objetos
        let tweetsClone = [...this.state.tweets];
        //Eliminamos el elemento del arreglo
        tweetsClone.splice(index, 1);
        //Actualizamos el estado
        this.setState({tweets: tweetsClone, newMessage: ""});
    }

    removeMessage = (index) => {
        //Clonar la lista de objetos
        let messagesClone = [...this.state.messages];
        //Eliminamos el elemento del arreglo
        messagesClone.splice(index, 1);
        //Actualizamos el estado
        this.setState({messages: messagesClone, newMessage: ""});
    }


    toggleContextMenu = (index) => {
       
        //Clonar la lista de objetos
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        tweetsClone[index].showContextM = !tweetsClone[index].showContextM;
        //Actualizamos el estado
        this.setState({tweets: tweetsClone});
    }

    toggleContextMenu2 = (index) => {
       
        //Clonar la lista de objetos
        let messageClone = JSON.parse(JSON.stringify(this.state.messages));
        //Actualizamos el valor de la propiedad selected
        messageClone[index].showContextM2 = !messageClone[index].showContextM2;
        //Actualizamos el estado
        this.setState({messages: messageClone});
    }
      
       
=======
    selectedRetweets = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));

        if (tweetsClone[index].selectedRetweets) {
            tweetsClone[index].selectedRetweets = false;
            tweetsClone[index].interaction.retweets = tweetsClone[index].interaction.retweets - 1;
            this.setState({tweets: tweetsClone});
        } else {
            tweetsClone[index].selectedRetweets = true;
            tweetsClone[index].interaction.retweets = tweetsClone[index].interaction.retweets + 1;
            this.setState({tweets: tweetsClone});
        }
    }

    selectedLikes = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));

        if (tweetsClone[index].selectedLikes) {
            tweetsClone[index].selectedLikes = false;
            tweetsClone[index].interaction.likes = tweetsClone[index].interaction.likes - 1;
            this.setState({tweets: tweetsClone});
        } else {
            tweetsClone[index].selectedLikes = true;
            tweetsClone[index].interaction.likes = tweetsClone[index].interaction.likes + 1;
            this.setState({tweets: tweetsClone});
        }
    }

>>>>>>> JC
    render() {
 

        const contextFn = {
            toggleContextMenuFn: this.toggleContextMenu,
            removetweetFn: this.removeTweet,
        }

        const contextFn2 = {
            toggleContextMenuFn2: this.toggleContextMenu2,
            removeMessageFn: this.removeMessage,
        }

        return (
            <div>

                <TextArea newMessage={this.state.newMessage} 
                    profileUrl={this.state.img} 
                    handleInput  = {this.handleInput} 
                    sendMessage = {this.sendMessage} 
                                />


                {
                    this.state.messages.map((messages, index) => {
                      return <Message 
                        index={index}
                        profile={messages.profile}
                        profileUrl={messages.img}
                        content={messages.content} 
                        showContextM2={messages.showContextM2}
                        contextFn2={contextFn2}
                      
                      />;
                    })}

                  
                {
                    this.state.tweets.map( (tweet, index) => {
                        return (
                            <Tweet
                                index={index}
                                profile={tweet.profile}
                                index = {tweet.id}
                                profileUrl={tweet.img}
                                username={tweet.username}
                                content={tweet.content}
                                interactionCommnets={tweet.interaction.comments} 
                                interactionRetweets={tweet.interaction.retweets}
                                interactionLikes={tweet.interaction.likes}
<<<<<<< HEAD
                                showContextM={tweet.showContextM}
                                contextFn={contextFn}
                                
                            />
=======
                                selectedLikesFn={this.selectedLikes}
                                selectedRetweetsFn={this.selectedRetweets}/>
>>>>>>> JC
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;