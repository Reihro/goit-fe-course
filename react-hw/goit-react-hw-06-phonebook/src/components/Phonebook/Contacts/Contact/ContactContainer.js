import { connect } from "react-redux";
import * as contactActions from "../../../../redux/contactActions";
import Contact from "./Contact";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	onRemoveContact: (id) => dispatch(contactActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
