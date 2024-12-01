// components/ui/custom-card.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CustomCardProps {
  title?: string | null; // Rendre title optionnel avec ?
  description?: string | null;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function CustomCard({
  title,
  description,
  children,
  footer,
}: CustomCardProps) {
  return (
    <Card className="flex-col justify-center">
      {/* Afficher le CardHeader seulement s'il y a un titre ou une description */}
      {(title || description) && (
        <CardHeader className=" p-2 m-2">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="justify-center items-center  p-2 m-2  ">
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
