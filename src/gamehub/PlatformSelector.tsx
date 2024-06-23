import platforms from "@/data/platforms.ts";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import useGameStore from "@/state-management/game/store.ts";

const orderList = ['asc', 'desc']
const PlatformSelector = () => {
    const {setPlatform, setSortOrder} = useGameStore()
    return (
        <div className="flex gap-2 mt-6">
            <Select onValueChange={setPlatform}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Plateforms" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {platforms.map(platform => (
                            <SelectItem value={platform.name} key={platform.id}>{platform.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select defaultValue="asc" onValueChange={setSortOrder}>
                <SelectTrigger className="w-[200px]">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            orderList.map(order => <SelectItem value={order} key={order}>Order by: {order}</SelectItem>)
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default PlatformSelector;