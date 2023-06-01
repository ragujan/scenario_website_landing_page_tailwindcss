<div
        ref={container}
        className="grid grid-cols-3 py-10 overflow-hidden bg-green-700"
      >
        {/* roller one or column 1 */}
        {/* <div className="relative flex flex-row justify-center h-full overflow-hidden bg-blue-400"> */}
        <div
          ref={tri1Ref}
          className="relative flex flex-col justify-center overflow-hidden bg-blue-400"
        >
          {placeImagesCol1(6, 1)}
        </div>
        {/* </div> */}
        {/* roller two or column 2 */}
        <div
          ref={tri2Ref}
          className="relative flex flex-col justify-center h-full overflow-hidden bg-red-400 top-[-65%]"
        >
          {placeImagesCol2(6, 2)}
        </div>
        {/* roller three or column 3 */}
        <div
          ref={tri3Ref}
          className="relative flex flex-col justify-center h-full overflow-hidden bg-blue-400"
        >
          {placeImagesCol1(6, 1)}
        </div>
      </div>