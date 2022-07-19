import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import styles from './AutoComplete.module.css';

type AutoCompleteType = {
    suggestions: Array<string>
    getSelectedValue: (value: string) => void
}

export const AutoComplete: React.FC<AutoCompleteType> = ({suggestions, getSelectedValue}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
        setInput(e.currentTarget.value);
        // @ts-ignore
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
        getSelectedValue(e.currentTarget.value);
    };

    const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setFilteredSuggestions([]);
        setInput(e.currentTarget.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        getSelectedValue(e.currentTarget.innerText);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

        // User pressed the enter key
        if (e.code === 'Enter') {
            setInput(filteredSuggestions[activeSuggestionIndex]);
            setActiveSuggestionIndex(0);
            setShowSuggestions(false);
            getSelectedValue(input);
            setInput('');
        }
        // User pressed the up arrow
        else if (e.code === 'ArrowUp') {

            if (activeSuggestionIndex === 0) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.code === 'ArrowDown') {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };


    const SuggestionsListComponent = () => {
        return filteredSuggestions.length
            ? (
                <ul className={styles.suggestions}>
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        // Flag the active suggestion with a class
                        if (index === activeSuggestionIndex) {
                            className = styles.suggestionActive;
                        }

                        return (
                            <li className={className} key={suggestion} onClick={onClick}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>)
            : (
                <div className={styles.noSuggestions}>
        {/*<span role="img" aria-label="tear emoji">*/}
        {/*  😪*/}
        {/*</span>{' '}*/}
        {/*            <em>sorry no suggestions, but you can keep writing your request</em>*/}
                </div>
            );
    };

    return (
        <div>
            <input className={styles.input}
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={input}
                   placeholder={'Choose country'}
            />
            {showSuggestions && input && <SuggestionsListComponent/>}
        </div>
    );
};

