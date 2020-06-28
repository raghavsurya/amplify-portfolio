import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createAppointment } from "./graphql/mutations";
import { listAppointments } from "./graphql/queries";
import { withAuthenticator } from "@aws-amplify/ui-react";

const initialState = { datetime: "", userID: "" };

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchAppointments() {
    try {
      const appointmentData = await API.graphql(
        graphqlOperation(listAppointments)
      );
      const appointments = appointmentData.data.listAppointments.items;
      setAppointments(appointments);
    } catch (err) {
      console.log("error fetching appointments");
    }
  }

  async function addAppointment() {
    try {
      if (!formState.datetime || !formState.userID) return;
      const appointment = { ...formState };
      setAppointments([...appointments, appointment]);
      setFormState(initialState);
      await API.graphql(
        graphqlOperation(createAppointment, { input: appointment })
      );
    } catch (err) {
      console.log("error creating Appointment:", err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Appointments</h2>
      <input
        onChange={(event) => setInput("name", event.target.value)}
        style={styles.input}
        value={formState.datetime}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput("description", event.target.value)}
        style={styles.input}
        value={formState.userID}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addAppointment}>
        Create Appointment
      </button>
      {appointments.map((appointment, index) => (
        <div key={appointment.id ? appointment.id : index} style={styles.todo}>
          <p style={styles.todoName}>{appointment.datetime}</p>
          <p style={styles.todoDescription}>{appointment.userID}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(App);
