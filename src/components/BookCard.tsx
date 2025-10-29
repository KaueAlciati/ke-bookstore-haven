import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre?: string;
  showButton?: boolean;
}

const BookCard = ({ id, title, author, cover, genre, showButton = true }: BookCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover-lift cursor-pointer bg-card">
      <Link to={`/livro/${id}`} className="block">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={cover}
            alt={`Capa do livro ${title}`}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-display font-semibold text-lg line-clamp-2 text-card-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">por {author}</p>
          {genre && (
            <p className="text-xs text-[hsl(var(--gold))] font-medium">{genre}</p>
          )}
          {showButton && (
            <Button 
              className="w-full mt-3 bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold-dark))] shadow-gold transition-smooth font-semibold"
            >
              Ler agora
            </Button>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default BookCard;
