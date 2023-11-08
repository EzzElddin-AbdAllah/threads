"use client";

import {
	getThreadLikesCount,
	likeThread,
	unlikeThread,
} from "@/lib/actions/thread.actions";
import {
	hasUserLikedThread,
	likeThreadUser,
	unlikeThreadUser,
} from "@/lib/actions/user.actions";
import Image from "next/image";
import { useState, useEffect } from "react";

const Like = ({ userId, threadId }: { userId: string; threadId: string }) => {
	const [isLiked, setLiked] = useState(false);
	const [threadLikesCount, setThreadLikesCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const liked = await hasUserLikedThread(userId, threadId);
			setLiked(liked);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const likesCount = await getThreadLikesCount(threadId);
			setThreadLikesCount(likesCount);
		};

		fetchData();
	}, [isLiked]);

	const toggle = async () => {
		const updatedIsLiked = !isLiked;

		setLiked(updatedIsLiked);

		if (updatedIsLiked) {
			await likeThread(threadId);
			await likeThreadUser(userId, threadId);
		} else {
			await unlikeThread(threadId);
			await unlikeThreadUser(userId, threadId);
		}
	};
	return (
		<>
			<Image
				src={isLiked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
				alt="heart"
				width={24}
				height={24}
				className="cursor-pointer object-contain"
				onClick={toggle}
			/>
			{threadLikesCount > 0 && (
				<>
					<span className="flex items-center text-light-2 text-small-regular -mx-2">
						{threadLikesCount}
					</span>
					<span className="text-light-2 text-small-regular -mr-2 hidden md:flex md:items-center">
						{threadLikesCount > 1 ? "Likes" : "Like"}
					</span>
				</>
			)}
		</>
	);
};

export default Like;
