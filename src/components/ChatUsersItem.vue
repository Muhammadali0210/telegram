<template>
  <div class="user-item-wrap">
    <div class="search-content">
      <img class="search-icon" src="../assets/icons/search.svg" alt="search">
      <input type="text" v-model="chatsearchvalue" class="chat-search" placeholder="Search">
    </div>
    <ul class="user-content">
      <li class="user-item" :class="[{ active: user.online }]" v-for="user in users" :key="user.name">
        <div class="images">
          <div class="online-box"></div>
          <img :src="user.img" alt="" class="user-image">
        </div>
        <div class="user-text-content">
          <div class="user-name">{{ user.name }}</div>
          <div class="last-message">{{ user.lastMessage }}</div>
        </div>
        <div class="last-time">19:45</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chatsearchvalue: "",
      users: [
        {
          name: "Saidmirzo",
          lastMessage: "nima gap",
          online: true,
          img: "./src/assets/images/person1.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
        {
          name: "Muhammadali",
          lastMessage: "Salom",
          online: false,
          img: "./src/assets/images/bg.jpg"
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.user-item-wrap {
  width: 500px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #E1E5EA;
  z-index: 1;

  .search-content {
    width: 100%;
    padding: 20px 16px;
    position: relative;

    .search-icon {
      top: 28px;
      left: 26px;
      position: absolute;
    }

    .chat-search {
      width: 100%;
      border: 1px solid #E0E5E8;
      padding: 8px 10px 8px 38px;
      border-radius: 8px;
      color: #929FB1;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.5px;
    }
  }

  .user-content {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    justify-content: start;
    overflow-y: auto;
    height: 100%;
    scrollbar-width: thin;

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      width: 0;
      background-color: #cb5252;
    }

    &::-webkit-scrollbar-track {
      width: 0;
    }

    &::-webkit-scrollbar {
      width: 0px;
    }

    .user-item {
      cursor: pointer;

      &:hover {
        background-color: #c7e5ff;
      }

      list-style-type: none;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding: 6px 17px 6px 8px;
      gap: 10px;
      border-radius: 12px;
      position: relative;

      &.active {
        background-color: #3348FF;

        .user-text-content {
          .user-name {
            color: #fff;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
          }

          .last-message {
            color: #F6F7F9;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }
        }

        .last-time {
          color: #D8DFE7;
        }
      }

      .images {
        border-radius: 50%;
        // overflow: hidden;
        width: 56px;
        height: 56px;
        position: relative;

        .online-box {
          position: absolute;
          bottom: 2px;
          right: 2px;
          border-radius: 50%;
          border: 1px solid #696969;
          width: 10px;
          height: 10px;
          background-color: #49ed24;
        }

        .user-image {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }

      .user-text-content {
        height: 100%;

        .user-name {
          color: #181D25;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
        }

        .last-message {
          color: #929FB1;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
      }

      .last-time {
        position: absolute;
        right: 17px;
        top: 16px;
        color: #929FB1;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }

    }
  }
}

@media (max-width: 1200px) {
  .user-item-wrap {
    width: 400px;

    .user-content {
      .user-item {
        padding: 4px 14px 4px 6px;
        gap: 8px;
        border-radius: 10px;

        .images {
          width: 46px;
          height: 46px;
        }

        .user-text-content {
          .user-name {
            font-size: 13px;
            line-height: 18px;
          }

          .last-message {
            font-size: 13px;
            line-height: 18px;
          }
        }

        .last-time {
          right: 15px;
          font-size: 13px;
          line-height: 18px;
        }

      }
    }
  }
}

@media (max-width: 798px) {
  .user-item-wrap {
    // display: none; 
    position: relative;
    width: 100%;
  }
}

@media (max-width: 500px) {
  .user-item-wrap {
    .search-content {
      display: none;
    }

    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
}</style>