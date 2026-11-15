import { Link } from 'react-router';

export default function NotFoundPage() {
    return (
        <article className="article">
            <h1 className="article__title">404 — Страница не найдена</h1>
            <p className="article__paragraph">
                Запрашиваемая страница не существует или была перемещена.
            </p>
            <Link to="/" className="not-found-link">
                На главную
            </Link>
        </article>
    );
}
