<template>
    <div class="chat-page-wrapper" :class="[{pageout: pageout}]">
        <div class="chat-navbar">
            <div class="outer-button" @click="chatPageOut">
                <img src="../assets/icons/arrow-left.svg" alt="<--">
            </div>
            <div class="chat-user-content">
                <img src="../assets/images/person1.jpg" alt="" class="user-image">
                <div class="user-text-content">
                    <div class="user-name">Blanche Jaskolski</div>
                    <div class="last-message">Online now</div>
                </div>
            </div>
            <ul class="user-navigation-content">
                <li class="user-navigation-icon">
                    <img src="../assets/icons/search-user.svg" alt="">
                </li>
                <li class="user-navigation-icon">
                    <img src="../assets/icons/video-camera.svg" alt="">
                </li>
                <li class="user-navigation-icon">
                    <img src="../assets/icons/phone-call.svg" alt="">
                </li>
                <li class="user-navigation-icon">
                    <img src="../assets/icons/more-dots-h.svg" alt="">
                </li>
            </ul>
        </div>
        <div class="messages-content">
            <li class="message-item-container" v-for="message in messages" :key="message.id">
                <div class="message-item" :class="[{ me: message.who == 'me' }]">
                    <div class="message-text">
                        {{ message.message }}
                    </div>
                    <div class="message-time">
                        {{ message.time }}
                    </div>
                </div>
            </li>
        </div>
        <form action="#" class="footer-form" @submit.prevent="submitForm()">
            <div class="chat-footer">
                <div class="footer-input-content">
                    <img src="../assets/icons/attach-file.svg" alt="file" class="attach-file">
                    <input type="text" class="message-input" placeholder="Type Message" v-model="newMessage" id="messageid">
                    <img src="../assets/icons/stiker.svg" alt="stiker" class="stiker">
                </div>
                <div class="voice-mik">
                    <img src="../assets/icons/mic-voice.svg" alt="">
                </div>
                <button class="voice-mik send-button" type="submit">
                    <img src="../assets/icons/mic-voice.svg" alt="">
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            messages: [
                {
                    id: 1,
                    message: "Assalomu aleykum, Yaxshimisiz",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 1,
                    message: "Salam, exercitationem cupiditate mollitia hic aliquid. Dicta et quibusdam ullam amet nisi placeat qui. Sed ipsam ut quia numquam dolores eveniet dolorem. Corrupti libero qui aut illo et et. Voluptatem rem omnis inventore voluptatem 😋 😋",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 2,
                    message: "Va aleykum assalom",
                    time: "12:32",
                    who: "them",
                },
                {
                    id: 3,
                    message: "Sog'ligingiz yaxshimi",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 4,
                    message: "Raxmat zo'r",
                    time: "12:31",
                    who: "them",
                },
                {
                    id: 1,
                    message: "Assalomu aleykum, Yaxshimisiz",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 1,
                    message: "Salam, exercitationem cupiditate mollitia hic aliquid. Dicta et quibusdam ullam amet nisi placeat qui. Sed ipsam ut quia numquam dolores eveniet dolorem. Corrupti libero qui aut illo et et. Voluptatem rem omnis inventore voluptatem 😋 😋",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 2,
                    message: "Va aleykum assalom",
                    time: "12:32",
                    who: "them",
                },
                {
                    id: 3,
                    message: "Sog'ligingiz yaxshimi",
                    time: "12:31",
                    who: "me",
                },
                {
                    id: 4,
                    message: "Raxmat zo'r",
                    time: "12:31",
                    who: "them",
                }
            ],
            newMessage: "",
            pageout: false
        }
    },
    methods: {
        submitForm() {
            const readyMessage = {
                id: 3,
                message: this.newMessage,
                time: "10:20",
                who: "me",
            }
            this.messages.push(readyMessage)
            this.newMessage = ""
        },
        chatPageOut(){
            this.pageout = !this.pageout
        }

    },

}
</script>
<style lang="scss" scoped>
.chat-page-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    z-index: 10;

    .chat-navbar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E1E5EA;
        padding: 20px 20px;
        height: 80px;
        background-color: #fff;

        .outer-button {
            display: none;
        }

        .chat-user-content {
            padding: 0;
            display: flex;
            gap: 10px;
            height: 40px;
            cursor: pointer;
            border: 1px solid red;

            .user-image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-size: cover;
            }

            .user-text-content {
                .user-name {
                    color: #181D25;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 24px;
                }

                .last-message {
                    color: #929FB1;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                }
            }
        }

        .user-navigation-content {
            display: flex;
            gap: 4px;
            padding: 0;
            border: 1px solid red;

            // border: 1px solid red;
            .user-navigation-icon {
                padding: 8px;
                cursor: pointer;

                img {
                    height: 24px;
                    width: 24px;
                }

                &:hover {
                    scale: 1.1;
                }
            }
        }

    }

    .messages-content {
        height: 100%;
        background-color: #F6F7F9;
        padding: 20px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-image: url(../assets/images/bg.jpg);
        background-size: contain;

        .message-item-container {
            width: 100%;

            .message-item {
                width: 100%;
                padding: 8px 12px;
                background-color: #fff;
                display: flex;
                width: auto;
                max-width: 526px;
                float: left;
                padding: 8px 12px;
                flex-direction: column;
                align-items: flex-start;
                gap: -4px;
                flex-shrink: 0;
                border-radius: 16px 16px 16px 0px;
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);

                &.me {
                    float: right;
                    border-radius: 16px 16px 0px 16px;
                    background: #EBF1FF;
                    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
                }

                .message-text {
                    color: #181D25;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                }

                .message-time {
                    color: #929FB1;
                    text-align: right;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                    align-self: stretch;
                }
            }
        }
    }

    .footer-form {
        height: 86px;

        .chat-footer {
            height: 86px;
            border-top: 1px solid #E1E5EA;
            align-items: center;
            display: flex;
            justify-content: center;
            gap: 10px;

            .footer-input-content {
                position: relative;
                width: 80%;

                .attach-file,
                .stiker {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    transition: all .25s;

                    &:hover {
                        scale: 1.1;
                    }
                }

                .attach-file {
                    left: 16px;
                }

                .stiker {
                    right: 16px;
                }

                .message-input {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid #E1E5EA;
                    background-color: #F6F7F9;
                    padding: 14px 62px;
                    color: #929FB1;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                }

            }

            .voice-mik {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                padding: 14px;
                background-color: #F6F7F9;
                border-radius: 50%;

                &.send-button {
                    display: none;
                }
            }

        }
    }

}

@media (max-width: 1200px) {
    .chat-page-wrapper {
        .chat-navbar {
            padding: 10px 14px;
            height: 60px;

            .user-navigation-content {
                .user-navigation-icon {
                    img {
                        height: 20px;
                        width: 20px;
                    }
                }
            }

        }

        .messages-content {
            padding: 10px;

            .message-item-container {
                .message-item {
                    max-width: 426px;
                    padding: 6px 10px;

                    .message-text {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .message-time {
                        font-size: 12px;
                        line-height: 18px;
                    }
                }
            }
        }

        .footer-form {
            height: 60px;

            .chat-footer {
                height: 60px;
                width: 100%;
                padding: 0 10px;

                .footer-input-content {
                    width: 100%;

                    .message-input {
                        padding: 10px 62px;
                        font-size: 14px;
                        line-height: 22px;
                    }

                    .attach-file,
                    .stiker {
                        width: 20px;
                        height: 20px;
                    }

                }

                .voice-mik {
                    width: 42px;
                    height: 42px;
                    padding: 14px;

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }

    }
}

@media (max-width: 1024px) {
    .chat-page-wrapper {
        .footer-form {
            .chat-footer {
                .voice-mik {
                    &.send-button {
                        display: block;
                    }
                }
            }
        }

    }
}

@media (max-width: 992px) {
    .chat-page-wrapper {
        .messages-content {
            .message-item-container {
                .message-item {
                    max-width: 326px;
                }
            }
        }

        .footer-form {
            .chat-footer {
                width: 100%;
                padding: 0 10px;

                .footer-input-content {
                    width: 70%;

                    .message-input {
                        padding: 10px 42px;
                        font-size: 14px;
                        line-height: 22px;
                    }

                    .attach-file,
                    .stiker {
                        width: 20px;
                        height: 20px;
                    }

                }

                .voice-mik {
                    width: 42px;
                    height: 42px;
                    padding: 14px;

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }

    }
}

@media (max-width: 798px) {

    .chat-page-wrapper {
        // display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: all .3s ease-out;
        .chat-navbar {
            position: relative;
            .outer-button {
                display: block;
                position: absolute;
                width: 20px;
                height: 20px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .chat-user-content {
                margin-left: 44px;
            }
            
        }
        &.pageout{
            transform: translateX(100%);
        }
    }
}
@media (max-width: 798px){
    .chat-page-wrapper{
        height: 88vh;
    }
}</style>