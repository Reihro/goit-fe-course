import { connect } from "react-redux";
import * as contactActions from "../../../redux/contactActions";
import AddContact from "./AddContact";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	addContact: (arr) => dispatch(contactActions.addContactArray(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
