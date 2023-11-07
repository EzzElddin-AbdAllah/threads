"use client";

import { likeThread, unlikeThread } from "@/lib/actions/thread.actions";
import {
	hasUserLikedThread,
	likeThreadUser,
	unlikeThreadUser,
} from "@/lib/actions/user.actions";
import Image from "next/image";
import { useState, useEffect } from "react";

const Like = ({ userId, threadId }: { userId: string; threadId: string }) => {
	const [isLiked, setLiked] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const liked = await hasUserLikedThread(userId, threadId);
			setLiked(liked);
		};

		fetchData();
	}, [userId, threadId]);

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
		<Image
			src={isLiked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
			alt="heart"
			width={24}
			height={24}
			className="cursor-pointer object-contain"
			onClick={toggle}
		/>
	);
};

export default Like;
