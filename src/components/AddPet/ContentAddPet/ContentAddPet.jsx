import AddPetForm from '../AddPetForm/';
import styles from './ContentAddPet.module.css';
// {
//   setShowModal;
// }
export default function ContentAddPet() {
  return (
    <>
      <div className={styles.modalContent}>
        <AddPetForm />
        <div className={styles.actionsContainer}>
          {/* <button
            className={styles.deleteBtn}
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className={styles.cancelBtn}
            //   onClick={() => setShowModal(false)}
          >
            Next
          </button> */}
        </div>
      </div>
    </>
  );
}
