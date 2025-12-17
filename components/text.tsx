import styles from './NeonText.module.css';

export default function NeonText({ text = "TEST" }) {
    return (
        <h1 className={`text-3xl ${styles.flickerNeon}`}>
            {text}
        </h1>
    );
};