import React, {createContext, useState, useEffect} from 'react'
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where } from "firebase/firestore";
import { db } from "../Firebase";

const RoomCtx = createContext({
    rooms: [],
    addRoom: (roomName) => {},
    selectedRoom: null,
    setSelectedRoom: (roomId) => {},
    messages: [],
    addMessage: (message) => {},
})

export function RoomContextProvider({children}) {

    const [rooms, setRooms] = useState([])
    const [messages, setMessages] = useState([])
    const [selectedRoom, setSelectedRoom] = useState(null)

    const roomCollection = collection(db, 'rooms')
    const messageCollection = collection(db, 'messages')

    useEffect(() => {
        const q = query(roomCollection, orderBy("created_at", 'desc'));
        onSnapshot(q, (querySnapshot) => {
            const rooms = [];
            querySnapshot.forEach((doc) => {
                const room = {
                    id: doc.id,
                    name: doc.data().name
                }
                rooms.push(room);
            });

            setRooms(rooms)
        });
    }, [])

    useEffect(() => {
        if (selectedRoom) {
            const q = query(messageCollection, where('room_id', '==', selectedRoom.id), orderBy("created_at", 'desc'));
            onSnapshot(q, (querySnapshot) => {
                const messages = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc)
                    const msg = {
                        id: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        created_at: doc.data().created_at,
                        message: doc.data().message,
                    }
                    messages.push(msg);
                });

                setMessages(messages)
            });
        }
    }, [selectedRoom])

    const addRoom = async (roomName) => {
        try {
            const docRef = await addDoc(roomCollection, {
              name: roomName,
              created_at: serverTimestamp()
            });
                console.log("Document written with ID: ", docRef.id);

          } catch (e) {
                console.error("Error adding document: ", e);
          }
    }

    const addMessage = async (message) => {
        console.log(selectedRoom, message)
        if (selectedRoom && message) {
            try {
                const docRef = await addDoc(messageCollection, {
                name: 'ibra',
                description: 'adasdasd',
                message,
                room_id: selectedRoom.id,
                created_at: serverTimestamp(),
                });
                    console.log("Document written with ID: ", docRef.id);

            } catch (e) {
                    console.error("Error adding document: ", e);
            }
        }
    }

    const ctx = {
        rooms,
        addRoom,
        selectedRoom,
        setSelectedRoom,
        messages,
        addMessage,
    }
    return (
        <RoomCtx.Provider value={ctx}>
            {children}
        </RoomCtx.Provider>
    )
}

export default RoomCtx
