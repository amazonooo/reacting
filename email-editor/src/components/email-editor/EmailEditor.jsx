import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useRef, useState } from 'react'

export function EmailEditor() {
	const [text, setText] = useState(
		`          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis delectus similique quod ea debitis quis dicta, qui quaerat? Vitae assumenda magni iste est, quas aperiam ea minus facilis dolorum, quibusdam vero nihil similique tempore consequuntur iusto placeat et aut voluptate eveniet? Sint est sequi nobis accusantium sed hic ea quis!`
	)

	const textRef = useRef<HTMLTextAreaElement | null>(null)

	const getSelectionText = () => {
		if(!textRef.current) return

		const cursorStart = textRef.current.selectionStart;
		const cursorEnd = textRef.current.selectionEnd;
		const selectedText = text.substring(cursorStart, cursorEnd)

		if (!selectedText) return
	}

  return (
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<textarea
					ref={textRef}
					className={styles.editor}
					spellCheck='false'
					onClick={getSelectionText}
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button onClick={() => setText('')}>
							<Eraser Size={17} />
						</button>
						<button>
							<Bold Size={17} />
						</button>
						<button>
							<Italic Size={17} />
						</button>
						<button>
							<Underline Size={17} />
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	)
}
