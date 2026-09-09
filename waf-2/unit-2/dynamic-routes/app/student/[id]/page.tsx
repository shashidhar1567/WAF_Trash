interface StudentPageProps {
    params: Promise<{ id: string }>;
  }                                     
export default async function StudentPage({ 
    params,
    }: StudentPageProps) {  
        const { id } = await params;
        return(
            <div>
                <h1> student details</h1>
                <p>Student ID: {id}</p>
            </div>
        );
    }
        

