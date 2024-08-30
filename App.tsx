import { StatusBar } from "expo-status-bar";

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Swiper from "react-native-deck-swiper";

import { Feather, Fontisto } from "@expo/vector-icons";

import { LikeButton } from "./src/components/LikeButton";
import { DislikeButton } from "./src/components/DislikeButton";
import { MenuContainer } from "./src/components/MenuContainer";
import api from "./src/services/api";
import axios from "axios";
import { Match } from "./src/pages/Match";

export interface ICat {
  id: string;
  name: string;
  origin: string;
  reference_image_id: string;
}

export default function App() {
  const swiperRef = useRef<null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const initialState = {
    id: "",
    name: "Loading...",
    origin: "please wait...",
    reference_image_id: "",
  };

  const [cats, setCats] = useState<ICat[]>([initialState]);

  async function getCatList(page: number = 0) {
    try {
      const result = await api.get(`breeds?limit=3&page=${currentPage}`);
      // https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Breeds/paths/~1breeds/get
      // const result = await axios.get(`https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Breeds/paths/~1breeds/get
      // `);
      // console.log(result.data)

      if (currentPage === 0) {
        setCats(result.data);
      } else {
        setCats([...cats, ...result.data]);
      }
      setCurrentPage((page) => page + 1);
    } catch (error) {
      // Sentry(error)
      console.log(error, "error");
    }
  }

  useEffect(() => {
    getCatList(currentPage);
  }, []);

  useEffect(() => {
    if (currentIndex + 1 === cats.length) getCatList(currentPage);
  }, [currentIndex]);

  async function voting(vote: number) {
    let filteredCat = cats.filter((cat, index) => index === currentIndex + 1);

    const payload = {
      image_id: filteredCat[0].reference_image_id,
      sub_id: "logged user",
      value: vote,
    };

    console.log(payload, "payload");
    return;

    try {
      // const result = await api.post(`votes`, payload);
      // https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Votes/paths/~1votes/post

      // const result = await axios.post('https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Votes/paths/~1votes/post?api_key=live_xm7TtR4nlcF6MUq6I1vNKSvLKpLZT7DVyJUkbwHjJZ6ggY7JY9xNFwbgnjyH1rt8'

      const result = await axios.post(
        "https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=aZyiLrsCh#tag/Votes/paths/~1votes/post",
        payload
      );
      console.log(result, "result");
    } catch (error) {
      // Sentry(error)
      console.log(error);
    }
  }

  function reset() {
    setCurrentIndex(0);
    setCats([initialState]);
  }

  if (currentIndex === cats?.length) return <Match reset={reset} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchWrapper}>
        <TouchableOpacity style={styles.tinderIcon}>
          <Fontisto name="tinder" size={20} color="#F43E7E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.starIcon}>
          <Fontisto name="star" size={20} color="#BFBFC0" />
        </TouchableOpacity>
      </View>

      <Swiper
        onSwipedAll={() => getCatList(currentPage)}
        ref={swiperRef}
        verticalThreshold={3}
        cardIndex={currentIndex}
        cards={cats}
        backgroundColor={"#fff"}
        stackSize={3}
        marginTop={50}
        onSwipedLeft={() => {
          console.log("Disliked");
          voting(-1);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }}
        onSwipedRight={() => {
          console.log("Liked");
          voting(1);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }}
        renderCard={(cat: ICat) => (
          <View style={[styles.card]}>
            {cat.reference_image_id ? (
              <Image
                source={{
                  uri: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
                }}
                style={styles.imageCard}
              />
            ) : (
              <Image
                source={{ uri: "https://i.imgur.com/jM7XxE4.jpeg" }}
                style={styles.imageCard}
              />
            )}
            <View style={styles.cardTextWrapper}>
              <View>
                <Text style={styles.title}>{cat.name}</Text>
                <Text style={styles.description}>{cat.origin}</Text>
              </View>
              <View>
                <Text style={styles.title}>{cat.id}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View>
        <View style={styles.likeOrNotWrapper}>
          <TouchableOpacity
            onPress={() => {
              swiperRef.current?.swipeLeft();
            }}
          >
            <DislikeButton />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              swiperRef.current?.swipeRight();
            }}
          >
            <LikeButton />
          </TouchableOpacity>
        </View>

        <MenuContainer>
          <TouchableOpacity onPress={() => getCatList()}>
            <Fontisto name="paw" size={20} color="#EC537E" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-circle" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCats([])}>
            <Feather name="user" size={20} color="black" />
          </TouchableOpacity>
        </MenuContainer>
      </View>
      <StatusBar style="auto" translucent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    marginTop: 40,
  },
  card: {
    flex: 1,
    maxHeight: 514,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  imageCard: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    color: "#333",
    fontWeight: "500",
  },
  description: {
    fontSize: 10,
    marginTop: 4,
    color: "#999",
    fontWeight: "500",
  },
  cardTextWrapper: {
    width: "90%",
    height: 64,
    backgroundColor: "#fff",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: "relative",
    marginTop: -64,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  switchWrapper: {
    backgroundColor: "#E3E3E4",
    borderRadius: 48,
    flexDirection: "row",
    width: 110,
    alignSelf: "center",
    padding: 4,
    position: "relative",
    marginTop: 20,
    zIndex: 99999,
    height: 38,
  },
  starIcon: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: "#E3E3E4",
    borderRadius: 32,
    alignItems: "center",
  },
  tinderIcon: {
    paddingHorizontal: 18,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 48,
  },
  likeOrNotWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 60,
    marginTop: 60,
    alignSelf: "center",
    gap: 50,
  },
});
