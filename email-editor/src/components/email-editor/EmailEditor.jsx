import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'

export function EmailEditor() {
  return (
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<textarea className={styles.editor} spellCheck='false'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis delectus similique quod ea debitis quis dicta, qui quaerat? Vitae assumenda magni iste est, quas aperiam ea minus facilis dolorum, quibusdam vero nihil similique tempore consequuntur iusto placeat et aut voluptate eveniet? Sint est sequi nobis accusantium sed hic ea quis!
				</textarea>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button>
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
