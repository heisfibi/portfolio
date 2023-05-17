import Container from "../../../components/Container";

export default function TicTacToe() 
{
    return (
        <>
        
            <Container contentClassNmae="px-0 sm:px-3">
                <div className="grid grid-rows-3 grid-cols-3 gap-[2px] sm:gap-6 py-6">
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    />
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    /> 
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    />
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    /> 
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    />
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    /> 
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    />
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    /> 
                    <button 
                        className="bg-almost-black-100  w-full aspect-square drop-shadow-2xl hover:bg-almost-black-500 transition-colors duration-300"
                    /> 
                </div>
            </Container>
        
        </>
    )
}